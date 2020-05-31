const baseUrl = `https://expensetracker-ddc5d.firebaseio.com/expense.json`;

export function getExpenses() {
  return fetch(baseUrl).then((res) => res.json());
}

// Transactions will be array of objects
export function putExpenses(transactions) {
  return fetch(baseUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactions),
  }).then((res) => res.json());
}
