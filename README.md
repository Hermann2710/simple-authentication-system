# Simple Authentication System – Frontend

Ce projet est le frontend d’un système d’authentification simple, développé avec React, TypeScript et Vite.

## 🚀 Aperçu

- Authentification (inscription, connexion, pages protégées)
- UI moderne et responsive
- Gestion du contexte d’authentification
- Appels API vers un backend Node.js/Express

## 🛠️ Technologies principales

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/) (gestionnaire de paquets recommandé)

## 📁 Structure du projet

```
frontend/
  ├── public/                # Fichiers statiques
  └── src/
      ├── components/        # Composants réutilisables (Navbar, etc.)
      ├── contexts/          # Contextes React (authentification)
      ├── middlewares/       # Middlewares React (routes protégées)
      ├── pages/             # Pages principales (login, register, home, protected)
      ├── services/          # Services (API, etc.)
      ├── App.tsx            # Point d’entrée principal de l’app
      └── index.css          # Styles globaux
```

## ⚡ Prérequis

- Node.js >= 18
- pnpm (recommandé)

## 🏁 Installation & Lancement

1. Installe les dépendances :

```bash
pnpm install
```

2. Lance le serveur de développement :

```bash
pnpm dev
```

3. Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

## 📜 Scripts utiles

- `pnpm dev` : démarre le serveur de développement
- `pnpm build` : build de production
- `pnpm preview` : prévisualise le build

## 🔗 Backend

Ce frontend fonctionne avec le backend du dossier `../backend`. Assure-toi que le backend tourne pour que l’authentification fonctionne.

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le repo
2. Crée une branche (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -am 'feat: nouvelle fonctionnalité'`)
4. Push la branche (`git push origin feature/ma-feature`)
5. Ouvre une Pull Request

## 📄 Licence

MIT
