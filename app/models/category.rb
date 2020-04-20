class Category < ApplicationRecord
  has_many :albums

  validates :name, presence: true

  has_one_attached :image

  def artists
    Artist.joins(:albums).where(albums: { id: self.albums.ids }).distinct
  end

  def songs
    # Song.joins(:album).where(songs: { id: self.albums.ids }).distinct
    Song.joins(:album).where(albums: { category_id: self.id }).distinct
  end
end