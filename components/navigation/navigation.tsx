import { useState } from 'react';

import classes from './navigation.module.css';

export function CKANavigationBar(props: any) {
  const [active, setActive] = useState('Billing');

  const links = props.data.map((item: any) => (
    <a
      className={classes.link}
      data-active={item.title === active || undefined}
      href={`/#${item.anchor}`}
      key={item.title}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.title);
        window.location.href = `/#${item.anchor}`;
      }}
    >
      {item.icon ? <item.icon className={classes.linkIcon} stroke={1.5} /> : null}
      <span>{item.title}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}></div>
    </nav>
  );
}
