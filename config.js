
/* ===========================
     API_URL will automatically obtain url based on the environment it's in.
     For obtaining local url when in development mode:
        Replace 'http://192.168.0.15:5000/' with your own localhost ip
============================*/
export const API_URL = process.env.NODE_ENV === 'development'
	? 'http://192.168.0.15:5000/mobile'
	:'https:/taobase.com/mobile'

    