import { NONCE, secureHeaders } from "hono/secure-headers";
import { createRoute } from "honox/factory";

export default createRoute(
	secureHeaders({
		strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
		contentSecurityPolicy: import.meta.env.PROD
			? {
					scriptSrc: [NONCE],
					defaultSrc: ["'self'"],
				}
			: undefined,
		permissionsPolicy: {
			fullscreen: ["self"],
			bluetooth: ["none"],
			payment: ["self"],
			syncXhr: [],
			camera: false,
			microphone: true,
			geolocation: ["*"],
			usb: ["self"],
			gyroscope: ["src"],
		},
	}),
);
