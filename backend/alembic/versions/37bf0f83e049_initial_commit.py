"""initial commit

Revision ID: 37bf0f83e049
Revises: 
Create Date: 2022-07-12 22:07:15.106687

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '37bf0f83e049'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.PrimaryKeyConstraint('user_id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('indices',
    sa.Column('index_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('index_name', sa.String(length=256), nullable=True),
    sa.Column('total_investment', sa.Numeric(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('index_id')
    )
    op.create_index(op.f('ix_indices_index_id'), 'indices', ['index_id'], unique=False)
    op.create_table('coins',
    sa.Column('coin_id', sa.Integer(), nullable=False),
    sa.Column('index_id', sa.Integer(), nullable=True),
    sa.Column('id', sa.String(length=256), nullable=False),
    sa.Column('symbol', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=False),
    sa.Column('image', sa.String(length=256), nullable=False),
    sa.Column('current_price', sa.Numeric(), nullable=False),
    sa.Column('market_cap', sa.Numeric(), nullable=False),
    sa.Column('proportion_invested', sa.Numeric(), nullable=False),
    sa.Column('personal_index_market_share', sa.Numeric(), nullable=False),
    sa.Column('last_updated', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.ForeignKeyConstraint(['index_id'], ['indices.index_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('coin_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('coins')
    op.drop_index(op.f('ix_indices_index_id'), table_name='indices')
    op.drop_table('indices')
    op.drop_table('users')
    # ### end Alembic commands ###
