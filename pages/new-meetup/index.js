import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
const NewMeetup = () => {
  const router = useRouter();
  const onAddMeetup = async (newMeetupData) => {
    const resp = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Add new Meetup!!" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />;
    </>
  );
};

export default NewMeetup;
