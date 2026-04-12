#!/usr/bin/env python3
"""
Bu modul 10 dəfə təsadüfi rəqəm qaytaran (yield)
asinxron generatoru ehtiva edir.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    10 dəfə dövr edir, hər dəfə 1 saniyə gözləyir və
    0-10 arası təsadüfi float rəqəm qaytarır.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
