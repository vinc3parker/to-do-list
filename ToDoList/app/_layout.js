import { Stack } from 'expo-router';
import Footer from '../components/FooterMenu/Footer';

const Layout = () => {
    return (
      <>
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                transitionSpec: {
                    open: {
                        animation: 'timing',
                        config: {
                            duration: 200,
                        },
                    },
                    close: {
                        animation: 'timing',
                        config: {
                            duration: 200,
                        },
                    },
                },
            }}
        >
        </Stack>
        <Footer />
      </>
    );
}

export default Layout;