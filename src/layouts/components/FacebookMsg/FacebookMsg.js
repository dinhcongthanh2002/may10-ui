import { FacebookProvider, CustomChat } from "react-facebook";
const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1639855993464956" chatSupport>
      <CustomChat pageId="104339388755722" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
