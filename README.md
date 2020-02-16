## Lancer le projet

Il faut premièrement ajouter ces lignes dans votre /etc/hosts:

```bash
127.0.0.1	ma-api.com
127.0.0.1	www.ma-messagerie.com
```

Puis lancer cette commande depuis la racine du projet:

```bash
docker-compose up -d
```

## Accéder aux sites

Le projet est disponible depuis:
  - api - http://ma-api.com
  - front - http://www.ma-messagerie.com
