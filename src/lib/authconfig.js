export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            try {
                if (user) {
                    token.id = user.id;
                    token.IsAdmin = user.IsAdmin;
                }
                return token;
            } catch (error) {
                console.error("JWT Callback Error:", error);
                throw error;
            }
        },
        async session({ session, token }) {
            try {
                if (token) {
                    session.user.id = token.id;
                    session.user.IsAdmin = token.IsAdmin;
                }
                return session;
            } catch (error) {
                console.error("Session Callback Error:", error);
                throw error;
            }
        },
        async authorized({ auth, request }) {
            try {
                console.log('Auth object:', auth);
                const user = auth?.user;
                const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
                const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
                const isOnLogin = request.nextUrl?.pathname.startsWith("/login");

                // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
                if (isOnAdminPanel && !user?.IsAdmin) {
                    return false;
                }

                // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
                if (isOnBlogPage && !user) {
                    return false;
                }

                // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
                if (isOnLogin && user) {
                    return Response.redirect(new URL("/", request.nextUrl));
                }

                return true;
            } catch (error) {
                console.error("Authorization Callback Error:", error);
                throw error;
            }
        }
    }
};
