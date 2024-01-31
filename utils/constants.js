const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const LOGO_URL = "data:image/png;base64,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"
// export const LOGO_URL = "data:image/jpeg;base64,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"

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9307735&lng=77.5838302&restaurantId=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
export const MENU1_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9307735&lng=77.5838302&restaurantId="

export default CDN_URL;