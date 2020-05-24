export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = "Մուտքագրեք էլ․ փոստը";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Սխալ Էլ․ փոստ";
      }
    },
    password: value => {
      if (!value) {
        errors.password = "Մուտքագրեք գաղտաբառը";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Գաղտնաբառը շատ պարզ է";
      }
    },
    password_2: value => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = "Գաղտնաբառի անհամապատասխանություն";
      }
    },
    fullname: value => {
      if (!isAuth && !value) {
        errors.fullname = "Մուտքագրեք ձեր անունը և ազգանունը";
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
