import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, PageLayout } from './modules/shared';
import ProtectedRoute from './ProtectedRoute';
import { LoginPage } from './modules/login';
import { SignupPage, SignupPageMobile } from './modules/signup';
import { MockDraftsPage } from './modules/mock-drafts/normal-screen/pages/MockDraftsPage';
import { CreateMockDraftsPage } from './modules/mock-drafts/normal-screen/pages/CreateMockDraftsPage';
import { LoginPageMobile } from './modules/login/mobile-screen/pages/LoginPageMobile';
import { CreateMockDraftsPageMobile } from './modules/mock-drafts/mobile-screen/pages/CreateMockDraftsPageMobile';
import { MockDraftsPageMobile } from './modules/mock-drafts/mobile-screen/pages/MockDraftsPageMobile';
import { PageLayoutMobile } from './modules/shared/mobile-screen/layout/PageLayoutMobile';
import { HomePageMobile } from './modules/home-page';
import { HomePage } from './modules/home-page/normal-screen/HomePage';

// Entry point
export function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                {window.screen.width > 500 ? (
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route
                            path="/mock-drafts/create/*"
                            element={
                                <ProtectedRoute path="/" element={<CreateMockDraftsPage />} layout={<PageLayout />} />
                            }
                        />
                        <Route
                            path="/mock-drafts/*"
                            element={<ProtectedRoute path="/" element={<MockDraftsPage />} layout={<PageLayout />} />}
                        />
                        <Route
                            path="/*"
                            element={<ProtectedRoute path="/" element={<HomePage />} layout={<PageLayout />} />}
                        />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/login" element={<LoginPageMobile />} />
                        <Route path="/signup" element={<SignupPageMobile />} />
                        <Route
                            path="/mock-drafts/create/*"
                            element={
                                <ProtectedRoute
                                    path="/"
                                    element={<CreateMockDraftsPageMobile />}
                                    layout={<PageLayoutMobile />}
                                />
                            }
                        />
                        <Route
                            path="/mock-drafts/*"
                            element={
                                <ProtectedRoute
                                    path="/"
                                    element={<MockDraftsPageMobile />}
                                    layout={<PageLayoutMobile />}
                                />
                            }
                        />
                        <Route
                            path="/*"
                            element={
                                <ProtectedRoute
                                    path="/"
                                    element={<HomePageMobile />}
                                    layout={<PageLayoutMobile />}
                                />
                            }
                        />
                    </Routes>
                )}
            </BrowserRouter>
        </AuthProvider>
    );
}
