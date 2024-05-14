import CredentialsProvider from 'next-auth/providers/credentials'
export const NEXT_AUTH ={
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
           
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '' },
          password: { label: 'Password', type: 'password', placeholder: '' }
            },
            async authorize(credentials: any) {
                // const username=credentials.username;
                // const password = credentials.password;
                // console.log(credentials);
                return {
                    id: "user1",
                    name: "rishabh"
                };
            },
        })

    ],
  
    callbacks:{
        jwt: ({token,user}:any)=>{
            // console.log("token",token);
            // console.log("user",user);
            token.userId=token.sub;
            return token;
        },
        session:({session,token,user}:any)=>{
            // console.log(session);
            if(session && session.user){
                session.user.id =token.userId;
            }
            // console.log(session);
            return session;
        }
    }
}