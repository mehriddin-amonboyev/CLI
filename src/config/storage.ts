//LOCAL STORAGEGA MA'LUMOT SAQLASH
export function saveState(key: any, state: any) {
  try {
    const serializedState = JSON.stringify(state); // Obyektni JSON formatga o‘girish
    localStorage.setItem(key, serializedState); // LocalStorage'ga yozish
  } catch (e) {
    console.log("storagega ma'lumot yozishda xatolik");
  }
}

//LocalStoragedan MA'LUMOT OLISH
export function loadState(key: string) {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState)
      return undefined; // Agar ma'lumot yo'q bo'lsa, undefined qaytaradi

    return JSON.parse(serializedState); // JSON ma'lumotni qayta obyektga o‘giradi

  } catch (e) {
    
    return undefined; // Xatolik bo‘lsa, `undefined` qaytaradi
  }
}

// Ma'lumotni o'chirish
export function removeState(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    return undefined;
  }
}
