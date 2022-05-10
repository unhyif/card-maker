import { getDatabase, ref, child, get, set } from "firebase/database";

export class DBService {
  constructor() {
    this.db = getDatabase();
  }

  load = async (id) =>
    get(child(ref(this.db), "cards/" + id))
      .then((snapshot) => (snapshot.exists() ? snapshot.val() : {}))
      .catch((e) => {
        throw e;
      });

  update = async (id, cards) =>
    set(ref(this.db, "cards/" + id), cards).catch((e) => {
      throw e;
    });
}
