import { ProfileMini } from "./Profile";

// if standard, like, dislike, resent represents base message at root of UI
// if response, it is the child of base message
export class Message {
  constructor(
    id: string,
    profile: ProfileMini,
    likeCount: number,
    dislikeCount: number,
    resentCount: number,
    responseCount: number,
    timestamp: string,
    type: TypeOfPost,
    respondingToPost: Message | undefined,
    postToResend: Message | undefined,
    msg?: string,
    caption?: string,
    media?: Buffer
  ) {}
}

export enum TypeOfPost {
  standard = 0,
  response = 1,
  like = 2,
  dislike = 3,
  resend = 4,
}
