import { Checkbox, Nav, Theme, useApplyTheme } from "@intility/bifrost-react";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import useLocalStorageState from "use-local-storage-state";

export function ThemePicker() {
  // persist theme state in local storage.
  // you might want to use a cookie or a database instead?
  const [theme, setTheme] = useLocalStorageState<Theme>("bfTheme", {
    defaultValue: "system",
  });
  // keep document theme in sync with state
  useApplyTheme(theme);

  return (
    <Nav.Group icon={faCircleHalfStroke} aria-label="Theme picker">
      <section>
        <Nav.Header>Color theme</Nav.Header>
        <Checkbox
          type="radio"
          label="Dark"
          name="color-theme"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        <Checkbox
          type="radio"
          label="Light"
          name="color-theme"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        <Checkbox
          type="radio"
          label="System"
          name="color-theme"
          checked={theme === "system"}
          onChange={() => setTheme("system")}
        />
      </section>
    </Nav.Group>
  );
}
