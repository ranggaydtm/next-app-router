/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "geck0",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const user: any = {
          id: 1,
          name: "rangga",
          email: "ranggay@gmail.com",
          role: "admin",
        };

        if (username === "rangga" && password === "1234") {
          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.username = user.username;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("username" in token) {
        session.user.username = token.username;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      if ("role" in token) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
