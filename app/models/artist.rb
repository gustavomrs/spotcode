class Artist < ApplicationRecord
  has_many :albums
  has_many :songs, through: :albums

  validates :name, presence: true

  has_one_attached :photo
end
