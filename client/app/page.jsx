import Chat from "../app/components/chat/Chat";
import Room from "../app/components/room/Room";

export default async function Page() {
  return (
    <div className="flex justify-center">
      <Room />
      <Chat />
    </div>
  );
}
