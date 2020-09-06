import { v4 as uuidv4 } from "uuid";

export function uuidgenerate() {
    const roomId = uuidv4();
    return roomId;
}
