import pytest
import requests.exceptions
import responses
import unittest
import unittest.mock as mock

from pycoingecko import CoinGeckoAPI
from requests.exceptions import HTTPError


class TestWrapper(unittest.TestCase):
    @responses.activate
    def test_connection_error(self):
        with pytest.raises(requests.exceptions.ConnectionError):
            CoinGeckoAPI().ping()

    @responses.activate
    def test_failed_ping(self):
        # Arrange
        responses.add(
            responses.GET, "https://api.coingecko.com/api/v3/ping", status=404
        )
        exception = HTTPError("HTTP Error")

        # Act Assert
        with pytest.raises(HTTPError) as HE:
            CoinGeckoAPI().ping()

    @responses.activate
    def test_ping(self):
        # Arrange
        ping_json = {"gecko_says": "(V3) To the Moon!"}
        responses.add(
            responses.GET,
            "https://api.coingecko.com/api/v3/ping",
            json=ping_json,
            status=200,
        )

        # Act
        response = CoinGeckoAPI().ping()

        ## Assert
        assert response == ping_json
