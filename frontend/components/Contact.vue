<template>
  <section>
    <Navbar />
    <div class="uk-flex uk-flex-center main">
      <div class="left">
        <form action="https://formspree.io/mjvolykr" method="POST">
          <p class="text">Get in touch with us directly!</p>
          <input
            type="text"
            name="firstname"
            id="fname"
            placeholder="Your first name .."
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Your last name .."
          />
          <label
            ><input
              id="mail"
              placeholder="Your email address .."
              type="text"
              name="_replyto"
          /></label>
          <textarea
            name="subject"
            id="subject"
            placeholder="Write something .."
          ></textarea>
          <input
            class="uk-button uk-button-secondary buttons"
            type="submit"
            value="Hit us up!"
          />
        </form>
      </div>
      <div class="center">
        <img src="~assets/contact.jpg" alt=""  class="img"/>
      </div>
      <div class="right">
        <p class="text">
          Make sure you keep an eye on our socials for news and #everythingBeer
        </p>
        <div class="socials">
          <ul class="socials-list">
            <li class="socials-item">
              <a class="buttons" href="">Instagram</a>
            </li>
            <li class="socials-item">
              <a class="buttons" href="">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.left,
.right {
  width: 30%;
}


form {
  width: 70%;
  margin: 25px auto;
}
.text {
  color: black !important;
  font-size: 2rem;
}
#fname,
#lname,
#mail,
#subject {
  border: none;
  box-shadow: none;
  background: transparent;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 100 !important;
  border-bottom: 1px solid black;
  outline: none;
}
select,
textarea {
  border-radius: 0 !important;
  box-shadow: none;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black !important;
  opacity: 1;
  /* Firefox */
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: black !important;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 55px;
  resize: vertical;
}
.left p {
  margin: 0;
}
p {
  font-size: 1.2rem;
  width: 70%;
  margin: 25px auto;
  padding: 75px 0;
}
input.uk-button {
  border-radius: 5px;
  transition: 0.3s;
}
ul {
  margin: 0 auto;
}
li {
  list-style: none;
  color: white;
  font-size: 1.3rem;
  margin: 25px 0;
}
a {
  text-decoration: none;
  color: white;
}
.socials {
  margin-left: 50px;
}
</style>