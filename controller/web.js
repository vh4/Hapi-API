const index = (req, res) => {
    const data = {
        nama:'Tony',
        kelas:'TK-42-02'
    }

    return JSON.stringify(data)

}

module.exports = {
    index,
}