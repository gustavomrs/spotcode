json.name @artist.name
json.file_url url_for(@artist.photo)

json.songs @artist.songs.each do |song|
  json.id song.id
  json.title song.title
  json.file_url url_for(song.file)
  json.artist_name @artist.name
  json.favorite current_user.is_favorite?('Song', song.id)
end