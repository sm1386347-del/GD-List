const dir = '/GD-List/data';

export async function fetchList() {
    const listResult = await fetch(`${dir}/_list.json`);
    return await listResult.json();
}

export async function fetchLevel(path) {
    const levelResult = await fetch(`${dir}/${path}.json`);
    return await levelResult.json();
}

export async function fetchEditors() {
    const editorsResults = await fetch(`${dir}/_editors.json`);
    return await editorsResults.json();
}
