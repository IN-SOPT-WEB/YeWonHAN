import React from "react";

export default function modal(props) {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "Modal"}>
      {open ? (
        <section>
          <main>{props.context}</main>
          <footer>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
