import { getDatabase, ref, child, get, set, remove } from "firebase/database";

export class DBService {
  constructor() {
    this.db = getDatabase();
  }

  load = async (id, onLoad) =>
    get(child(ref(this.db), `${id}/cards`))
      .then((snapshot) => (snapshot.exists() ? snapshot.val() : {}))
      .then((cards) => onLoad(cards))
      .catch((e) => console.error(e));
  // TODO: use listener, off method

  save = async (id, card) =>
    set(ref(this.db, `${id}/cards/${card.id}`), card).catch((e) =>
      console.error(e)
    );

  delete = async (id, key) =>
    remove(ref(this.db, `${id}/cards/${key}`)).catch((e) => console.error(e));

  reset = async (id, onReset) =>
    remove(ref(this.db, `${id}`))
      .then(() => onReset())
      .catch((e) => console.error(e));
}
