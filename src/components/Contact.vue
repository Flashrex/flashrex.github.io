<script setup>
</script>

<template>
    <section>
        <div class="contact-container">
            <h3>Kontakt</h3>
            <div>
                <div class="container">
                    <a href="https://www.google.com/maps/dir/Frankfurt/Frankfurt/@50.1109699,8.6409273,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47bd096f477096c5:0x422435029b0c600!2m2!1d8.6821267!2d50.1109221!1m5!1m1!1s0x47bd096f477096c5:0x422435029b0c600!2m2!1d8.6821267!2d50.1109221!3e2?entry=ttu"
                        target="_blank">
                        <img src="../assets/icons/earth.svg" alt="">
                    </a>
                    <div>
                        <p class="headline">Location</p>
                        <p class="text">Germany, Frankfurt</p>
                    </div>
                </div>
                <div class="container">
                    <a href="mailto:duda.dominik96@gmail.com" target="_blank">
                        <img src="../assets/icons/mail.svg" alt="">
                    </a>
                    <div>
                        <p class="headline">Mail</p>
                        <p class="text">duda.dominik96@gmail.com</p>
                    </div>
                </div>
                <div class="container">
                    <a href="https://www.linkedin.com/in/dominik-duda-89b10b229/" target="_blank">
                        <img src="../assets/icons/linkedin.svg" alt="">
                    </a>
                    <div>
                        <p class="headline">LinkedIn</p>
                        <p class="text">Dominik D.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>Copyright © 2024. All rights are reserved</p>
        </div>
    </section>
</template>

<style scoped>
section {
    scroll-snap-align: start;
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: linear-gradient(to right, var(--color-highlight) 20%, #17d898);
    clip-path: polygon(0% 25%, 100% 45%, 100% 100%, 0 100%);
}

.contact-container {
    width: 60%;
    height: 40vh;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-container>div {
    display: flex;
    gap: 4rem;
    margin-top: 2rem;
}

.container {
    display: flex;
    gap: 1rem;
}

.container>a {
    display: flex;
    align-items: center;
    transition: transform 0.5s;
}

.container>a:hover {
    transform: scale(1.05);
}

.container>div {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

img {
    --dimensions: 50px;
    width: var(--dimensions);
    height: var(--dimensions);
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.056);

    padding: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.304);
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(219deg) brightness(105%) contrast(102%);
}

h3 {
    color: var(--color-heading);
    font-size: 2em;
    font-weight: 700;
}

.headline {
    color: var(--color-heading);
    font-size: 1.2em;
    font-weight: 700;
}

.text {
    color: var(--color-text);
}

.footer {
    color: var(--color-heading);
    margin-bottom: 1rem;
}

@media (max-width: 768px) {
    .contact-container {
        position: absolute;
        bottom: 5rem;
    }

    .contact-container>div {
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
}
</style>flashrex.github.io