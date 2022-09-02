import { Platform, Text } from 'react-native';
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

export default function AppContainer() {
	return (
		<WithSkiaWeb
			getComponent={() => import('./App')}
			fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
		/>
	);
}