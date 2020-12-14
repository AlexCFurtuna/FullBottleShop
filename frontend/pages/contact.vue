<template>
  <section>
     <Header />
    <div class="uk-flex uk-flex-center main">
      <div class="left">
        <form data-aos="fade-right" data-aos-delay="300" action="https://formspree.io/mjvolykr" method="POST">
        <p class="text">Get in touch with us directly!</p>
        <input type="text" name="firstname" id="fname" placeholder="Your first name ..">
        <input type="text" name="lname" id="lname" placeholder="Your last name ..">
        <label><input id="mail" placeholder="Your email address .." type="text" name="_replyto"></label>
        <textarea name="subject" id="subject" placeholder="Write something .."></textarea>
        <input class="uk-button uk-button-secondary" type="submit" value="Hit us up!"></input>
      </form>
      </div>
      <div class="center"></div>
      <div class="right">
        <p class="text">
          Make sure you keep an eye on our socials for news and #everythingBeer
        </p>
        <div class="socials">
          <ul class="socials-list">
            <li class="socials-item">
              <a href="">Instagram</a>
            </li>
            <li class="socials-item">
              <a href="">Facebook</a>
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
.center {
  width: 40%;
}
section {
  background: rgba(265, 182, 50);
}
form {
  width: 70%;
  margin: 25px auto;
}
.text {
  color: white;
  font-size: 2rem;
}
.center {
  background: url("~assets/contact.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#fname,
#lname,
#mail,
#subject {
  border: none;
  border-bottom: 1px solid white;
  color: white;
  box-shadow: none;
  background: transparent;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 100 !important;
}
input #fname:focus,
input #lname:focus,
input #mail:focus,
input #subject:focus {
  outline: none;
}
select,
textarea {
  border-radius: 0 !important;
  box-shadow: none;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1;
  /* Firefox */
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
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
  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
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
a {
  font-size: 2rem;
  padding: 10px 30px;
  background: black;
  color: white;
  text-decoration: none;
}
a:hover,
input.uk-button:hover {
  color: white;
  background: rgba(265, 182, 50);
  border: 1px solid black;
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
</style>