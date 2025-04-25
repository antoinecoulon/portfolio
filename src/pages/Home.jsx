
function Home() {
    return (
        <main className='w-full h-full flex justify-center items-center gap-8  font-light'>
            <div className='home-illustration w-[500px] h-[500px] bg-accent-primary p-2'>
                <img src="https://picsum.photos/540" alt="illustration aléatoire" />
            </div>
            <div className="home-text w-[500px]">
                <h2>Hello from Home!</h2>
                <p className="text-justify">
                    Bienvenue sur mon portfolio !!! <br/>
                    Le site est en construction actuellement et sera bientôt opérationnel ! Il me permettra d'exposer mes projets personnels et l'évolution de mon apprentissage. Actuellement en formation, je ferai évoluer ce portfolio au même rythme que moi-même. J'ai construit ce site en utilisant <span className="text-highlight">React</span> avec Vite, et Tailwind.
                </p>
            </div>
        </main>
    )
}

export default Home