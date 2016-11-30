import Server from './src/server';

const PORT = 5000;
Server(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
