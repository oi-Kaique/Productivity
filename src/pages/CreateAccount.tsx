import Head from "next/head";
import CreateAccount from "@/components/WebPages/Login-Create-Forgot/CreateAccont";

const CreateAccountPage = () => {
  return (
    <>
      <Head>
        <title>Criar Conta</title>
      </Head>
      <CreateAccount />
    </>
  );
};

export default CreateAccountPage;
