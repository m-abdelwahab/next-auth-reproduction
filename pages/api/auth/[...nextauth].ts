import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.WorkOS({
      clientId: process.env.WORKOS_CLIENT_ID,
      clientSecret: process.env.WORKOS_API_KEY,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  debug: true,
  secret: process.env.SECRET,
});
