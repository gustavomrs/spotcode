import Api from './api'

const RecentlyHearsService = {
  create: (id) => Api.post(`/albums/${id}/recently_heards`),
}

export default RecentlyHearsService