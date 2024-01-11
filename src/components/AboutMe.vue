<script setup>
</script>

<template>
    <section id="aboutme">
        <img src="../assets/Bild1.jpg" loading="lazy">

        <div class="text-container">
            <h3>Über mich</h3>
            <div>
                <p>
                    Ich bin Student im B.Sc. Angewandte Informatik und entwickle leidenschaftlich gerne Webseiten und
                    -applikationen.
                    Ich bin bereits vor meinem Studium durchs Modding auf die Programmierung aufmerksam geworden und liebe
                    es mich stets neu auszuprobieren.
                    Derzeit beschäftige ich mich viel mit Frameworks wie Vue oder React.
                    Habe aber auch großes Interesse an der Backendprogrammierung.
                </p>
            </div>
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
    align-items: center;
    justify-content: center;
    gap: 6rem;

    background: linear-gradient(to right, var(--color-highlight) 20%, #17d898);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 75%);
}

section>img {
    position: relative;
    top: -7rem;
    box-shadow: 1px 1px 4px rgba(59, 59, 59, 0.573);

    border-radius: 100%;
    width: 350px;
    aspect-ratio: 1/1;
    object-fit: cover;

    transition: top 0.5s;
}

section>img:hover {
    top: -7.5rem;
}

.text-container {
    position: relative;
    top: -7rem;
    width: 30%;
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-container>div {
    display: flex;
}

h3 {
    color: #2e2f2e;
    font-weight: 700;
    line-height: 1.6;
    font-size: 1.5em;
    text-transform: uppercase;
}

p {
    color: rgba(255, 255, 255, 0.805);
    line-height: 1.4;
    font-size: 1.2em;
    text-wrap: balance;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {

    section {
        justify-content: flex-start;
        flex-direction: column;
        height: 150vh;
    }

    section>img {
        margin-top: 2rem;
        width: 60%;
        top: 0;
    }

    section>img:hover {
        top: 0;
    }

    .text-container {
        margin-top: 2rem;
        width: 90%;
        max-height: 45%;
        padding: 1rem 0.5rem;
        overflow-y: scroll;
        text-align: center;
        justify-content: flex-start;
    }

    h3 {
        position: relative;
        top: 0.5rem;
    }

    p {
        position: relative;
        top: 1rem;
    }
}
</style>