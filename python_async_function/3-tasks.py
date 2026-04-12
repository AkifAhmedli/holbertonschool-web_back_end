#!/usr/bin/env python3
"""
Bu modul wait_random funksiyasını asyncio.Task-a
çevirən funksiyanı ehtiva edir.
"""
import asyncio

# wait_random funksiyasını əvvəlki fayldan idxal edirik
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    wait_random coroutine-i əsasında bir asyncio.Task yaradır və qaytarır.
    """
    return asyncio.create_task(wait_random(max_delay))
