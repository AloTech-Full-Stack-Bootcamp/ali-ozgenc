import "/src/css/index.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Section(props) {
  //taskımızı tuttuğumuz state
  const [task, setTask] = useState("");
  //taskların tutulduğu array
  const [todos, setTodos] = useState([]);
  //hangi fragmentta olduğumuzu tutarız
  const [activeFragment, setActiveFragment] = useState({
    all: true,
    active: false,
    completed: false,
  });
  const [toggleAll, setToggleAll] = useState(false);

  //all active ve completed fragmentleri göstermek için
  function renderFragment(activeFragment) {
    if (activeFragment.all) {
      //tüm taskları göster
      return todos.map((todo, index) => (
        <li className={todo[1]} key={todo[2]}>
          <div className="view">
            {toggleAll ? (
              <input
                className="toggle"
                type="checkbox"
                checked
                onChange={() => {
                  setTodos((prev) => {
                    console.log("ses");
                    prev[index][1] =
                      prev[index][1] === "completed"
                        ? "uncompleted"
                        : "completed";
                    return [...prev];
                  });
                }}
              />
            ) : (
              <input
                className="toggle"
                type="checkbox"
                onChange={() => {
                  setTodos((prev) => {
                    prev[index][1] =
                      prev[index][1] === "completed"
                        ? "uncompleted"
                        : "completed";
                    return [...prev];
                  });
                }}
              />
            )}

            <label
              onClick={() => {
                setTodos((prev) => {
                  prev[index][3] = true;
                  return [...prev];
                });
              }}
            >
              {todo[3] === true ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setTodos((prev) => {
                      prev[index][3] = false;
                      console.log(prev[index][3]);
                      return [...prev];
                    });
                  }}
                >
                  <input
                    className="editing"
                    value={todo[0]}
                    onChange={(e) => {
                      setTodos((prev) => {
                        prev[index][0] = e.target.value;
                        return [...prev];
                      });
                    }}
                    style={{
                      border: "none",
                      fontSize: "24px",
                      color: "orange",
                    }}
                  />
                </form>
              ) : (
                todo[0]
              )}
            </label>
            <button
              className="destroy"
              onClick={() => {
                setTodos((prev) => {
                  prev.splice(index, 1);
                  return [...prev];
                });
              }}
            ></button>
          </div>
        </li>
      ));
    } else if (activeFragment.active) {
      //active taskları gösterir
      return todos
        .filter((todo) => todo[1] === "uncompleted")
        .map((todo, index) => (
          <li className={todo[1]} key={todo[2]}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => {
                  setTodos((prev) => {
                    console.log("ses");
                    prev[index][1] =
                      prev[index][1] === "completed"
                        ? "uncompleted"
                        : "completed";
                    return [...prev];
                  });
                }}
              />
              <label>{todo[0]}</label>
            </div>
          </li>
        ));
    } else if (activeFragment.completed) {
      //completed taskları gösterir
      return todos
        .filter((todo) => todo[1] === "completed")
        .map((todo, index) => (
          <li className={todo[1]} key={todo[2]}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => {
                  setTodos((prev) => {
                    console.log("ses");
                    prev[index][1] =
                      prev[index][1] === "completed"
                        ? "uncompleted"
                        : "completed";
                    return [...prev];
                  });
                }}
              />
              <label>{todo[0]}</label>
            </div>
          </li>
        ));
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(e) => {
            //her taskı id ve css classı ile kendine özel bir arrayde tutarız
            e.preventDefault();
            setTodos([...todos, [task, "uncompleted", nanoid(), false]]);
            setTask("");
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            autoFocus
          />
        </form>
      </header>

      <section className="main">
        {toggleAll === true ? (
          <input className="toggle-all" type="checkbox" checked />
        ) : (
          <input className="toggle-all" type="checkbox" />
        )}

        <label
          htmlFor="toggle-all"
          onClick={() => {
            console.log("ses");
            setTodos((prev) => {
              if (prev.every((todo) => todo[1] === "completed")) {
                return prev.map((todo) => {
                  todo[1] = "uncompleted";
                  return todo;
                });
              }
              return prev.map((todo) => {
                todo[1] = todo[1] === "uncompleted" ? "completed" : "completed";
                return todo;
              });
            });
            if (todos.length === 0) {
            } else {
              setToggleAll(!toggleAll);
            }
          }}
        >
          Mark all as complete
        </label>

        <ul className="todo-list">{renderFragment(activeFragment)}</ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>
            {
              //bitmemiş taskların sayısını gösterir
              todos.filter((item) => {
                return item[1] === "uncompleted";
              }).length
            }{" "}
          </strong>
          items left
        </span>

        <ul className="filters">
          {/* seçili fragmentin cssini ayarlaız ve hangi fragmentta olduğumuzun durumunu tutarız*/}
          <li>
            <button
              onClick={() => {
                setActiveFragment({
                  all: true,
                  active: false,
                  completed: false,
                });
              }}
            >
              <a className={activeFragment.all ? "selected" : ""}>All</a>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveFragment({
                  all: false,
                  active: true,
                  completed: false,
                });
              }}
            >
              <a className={activeFragment.active ? "selected" : ""}>Active</a>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveFragment({
                  all: false,
                  active: false,
                  completed: true,
                });
              }}
            >
              <a className={activeFragment.completed ? "selected" : ""}>
                Completed
              </a>
            </button>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => {
            setTodos((prev) => {
              return prev.filter((todo) => todo[1] !== "completed");
            });

            setToggleAll(false);
          }}
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}
