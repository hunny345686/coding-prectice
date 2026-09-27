import React from "react";

const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #state = STATE.PENDING;
  #value;
  #handlers = [];

  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("Promise resolver is not a function");
    }

    const resolve = (value) => {
      this.#resolve(value);
    };

    const reject = (reason) => {
      this.#reject(reason);
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  #resolve = (value) => {
    // Promise cannot transition again
    if (this.#state !== STATE.PENDING) return;

    // Handle resolving with another MyPromise
    if (value instanceof MyPromise) {
      value.then(
        (data) => this.#resolve(data),
        (error) => this.#reject(error),
      );
      return;
    }

    this.#state = STATE.FULFILLED;
    this.#value = value;

    this.#runHandlers();
  };

  #reject = (reason) => {
    if (this.#state !== STATE.PENDING) return;

    this.#state = STATE.REJECTED;
    this.#value = reason;

    this.#runHandlers();
  };

  #runHandlers = () => {
    if (this.#state === STATE.PENDING) return;

    // Promise callbacks execute asynchronously
    queueMicrotask(() => {
      this.#handlers.forEach((handler) => {
        this.#handle(handler);
      });

      this.#handlers = [];
    });
  };

  #handle = (handler) => {
    const { onFulfilled, onRejected, resolve, reject } = handler;

    try {
      if (this.#state === STATE.FULFILLED) {
        if (typeof onFulfilled !== "function") {
          resolve(this.#value);
          return;
        }

        const result = onFulfilled(this.#value);
        resolve(result);
      }

      if (this.#state === STATE.REJECTED) {
        if (typeof onRejected !== "function") {
          reject(this.#value);
          return;
        }

        const result = onRejected(this.#value);
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  };

  then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      const handler = {
        onFulfilled,
        onRejected,
        resolve,
        reject,
      };

      this.#handlers.push(handler);

      if (this.#state !== STATE.PENDING) {
        this.#runHandlers();
      }
    });
  };

  catch = (onRejected) => {
    return this.then(null, onRejected);
  };

  finally = (callback) => {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (error) => {
        return MyPromise.resolve(callback()).then(() => {
          throw error;
        });
      },
    );
  };

  // -------------------------
  // Static Methods
  // -------------------------

  static resolve = (value) => {
    if (value instanceof MyPromise) {
      return value;
    }

    return new MyPromise((resolve) => {
      resolve(value);
    });
  };

  static reject = (reason) => {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  };

  static all = (promises) => {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let completed = 0;

      if (promises.length === 0) {
        resolve([]);
        return;
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        }, reject);
      });
    });
  };

  static race = (promises) => {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve, reject);
      });
    });
  };

  static allSettled = (promises) => {
    return new MyPromise((resolve) => {
      const results = [];
      let completed = 0;

      if (promises.length === 0) {
        resolve([]);
        return;
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            results[index] = {
              status: "fulfilled",
              value,
            };

            completed++;

            if (completed === promises.length) {
              resolve(results);
            }
          },
          (reason) => {
            results[index] = {
              status: "rejected",
              reason,
            };

            completed++;

            if (completed === promises.length) {
              resolve(results);
            }
          },
        );
      });
    });
  };

  static any = (promises) => {
    return new MyPromise((resolve, reject) => {
      const errors = [];
      let rejectedCount = 0;

      if (promises.length === 0) {
        reject(new AggregateError([], "All promises were rejected"));
        return;
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(resolve, (error) => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
      });
    });
  };
}

// React Debounce

function Search() {
  const [value, setValue] = React.useState("");
  const [debounce, setdebounce] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setdebounce(value);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  React.useEffect(() => {
    if (!debounce) return;

    // API CALL

    console.log("Searching:", debouncedQuery);
  }, [debounce]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}

// T2

import { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect 1: Debounce the user input
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // Effect 2: Execute the API call when debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    async function fetchSearchResults() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.example.com/search?q=${encodeURIComponent(debouncedQuery)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();
        setResults(data.items || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchSearchResults();

    // Abort in-flight requests if debouncedQuery changes quickly
    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "16px", maxWidth: "400px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
