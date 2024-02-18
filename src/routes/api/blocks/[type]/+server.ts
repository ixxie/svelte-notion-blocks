import { pageFromSlug, aggressiveCache } from '$lib/server';
import { Client } from '@notionhq/client/build/src';
import { json } from '@sveltejs/kit';
import { BlockDatabase } from '../../../databases.server';

const client = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

export async function GET({ params }) {
    const { type } = params;
    const response = await pageFromSlug(client, BlockDatabase, type);
    return json(response, aggressiveCache(3600));
}