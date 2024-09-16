
function HeaderGlitchLayout(prop) {
  const classname = prop.classname;

  return (
    <>
      <div className="glitch">
        <div className={classname}></div>
        <div className={classname}></div>
        <div className={classname}></div>
        <div className={classname}></div>
        <div className={classname}></div>
      </div>
    </>
  );
}

export default HeaderGlitchLayout;
