import { useContext, useEffect } from "react";
import { NotificationContext } from "../providers/NotificationProvider";
import { Link } from "react-router-dom";

export default function NotificationToast() {
  const { notifications, setVisible } = useContext(NotificationContext);

  useEffect(() => {
    if (notifications.length === 0) return;

    const latest = notifications[0];
    setVisible(latest);

    const timer = setTimeout(() => setVisible(null), 3000);
    return () => clearTimeout(timer);
  }, [notifications, setVisible]);
  return (
    <div className="container min-h-[calc(100vh-100px)] pt-32 mx-auto">
        <div className=" border border-orange-400 h-[500px] rounded-xl">
            {
                notifications.map((notify, index) => {
                    console.log(notify);
                    return (
                        <Link to={`/chat/${notify.from}`} key={index} className="p-2 m-4 border-b border-gray-300 flex items-center gap-2">
                            <img src="https://github.com/maxleiter.png" className="size-14 rounded-full" />
                            <p className="text-lg font-medium text-zinc-700">{notify.text.slice(0, 50) + "..."}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  );
}
