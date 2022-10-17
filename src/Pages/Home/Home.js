
import ViewPost from '../../Components/ViewPost/ViewPost';
import './Home.css';

//Affichage du Header (Importation)
//Affichage du composant (CreatePost) (Importation)
//Affichage de l'input recherche
//La page va afficher le composant (ViewPost)
//Affichage du footer (Importation)

function Home() {
  return (
    <div>
      <ViewPost/>
    </div>
  );
}

export default Home;