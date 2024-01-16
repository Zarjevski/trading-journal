import Favicon from "@/assets/favicon.png";

const showNotification = (body: string, title: string) => {
  Notification.requestPermission();
  let options: any = {
    body: body,
    image: Favicon,
    dir: "ltr",
  };
  return new Notification(title, options);
};

export default showNotification;
