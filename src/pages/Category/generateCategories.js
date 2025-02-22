import { getMoviesByTypeAPI } from "../../apis/apis"

export const generateCategories = (category) => {
  const prototypeData = {
    size: "large",
    funcAPI: getMoviesByTypeAPI,
    params: {
      type_list: category,
      limit: 20,
    },
  }
  let categoryData = []
  switch (category) {
    case 'phim-bo':
      categoryData = [
        {
          ...prototypeData,
          params: {
            ...prototypeData.params
          },
          title: "Phim bộ hot",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: 'tinh-cam'
          },
          title: "Phim hay cho người cô đơn",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "co-trang"
          },
          title: "Top phim Hoa ngữ bạo đỏ",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            country: "han-quoc"
          },
          title: "Những tựa phim Hàn xem là dính",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            country: "viet-nam",
          },
          title: "Phim bộ Việt Nam đặc sắc",
        },
      ]
      break;
    case 'phim-le':
      categoryData = [
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: 'tinh-cam'
          },
          title: "Top phim tình cảm nên xem cùng người thương",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: 'hanh-dong'
          },
          title: "Phim hành động gay cấn",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "tam-ly"
          },
          title: "Phim tâm lý đỉnh cao",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "kinh-di"
          },
          title: "Phim kinh dị giật gân",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "hai-huoc",
          },
          title: "Phim hài hước đặc sắc",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "tai-lieu",
          },
          title: "Phim tài liệu chân thực",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "hinh-su",
          },
          title: "Hình sự trinh thám",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            category: "vo-thuat",
          },
          title: "Quyền cước vô tình",
        },
      ]
      break;
    case 'anime':
      categoryData = [
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh'
          },
          title: "Những bộ anime ngọt ngào khiến tim bạn rung động từng khoảnh khắc!",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh',
            category: 'hanh-dong'
          },
          title: "Tăng tốc adrenaline với 10 anime hành động đỉnh cao!",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh',
            category: "tinh-cam"
          },
          title: "Top anime tình cảm khiến bạn tin vào tình yêu đích thực!",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh',
            country: 'trung-quoc'
          },
          title: "Hoạt hình Trung Quốc",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh',
            category: "hanh-dong",
          },
          title: "Hành động đỉnh cao",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh',
            category: "vien-tuong",
          },
          title: "Viễn tưởng & Kỳ ảo",
        },
        {
          ...prototypeData,
          params: {
            ...prototypeData.params,
            type_list: 'hoat-hinh',
            category: "hoc-duong",
          },
          title: "Thanh xuân học đường",
        }
      ]
      break;
    default: break;
  }
  return categoryData
}