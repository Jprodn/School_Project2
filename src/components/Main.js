export default function Main() {
    return (

        <main>
            <section id="problem">
                <div class="expression show-hide"></div>
                <p>
                    Problem: <span class="currentProblem">1</span>/10 | Score: <span class="currentScore">0</span>
                </p>
            </section>
            <section id="answers" class="show-hide">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <button id="btnStartOver">Start Over</button>
        </main>

    )
}