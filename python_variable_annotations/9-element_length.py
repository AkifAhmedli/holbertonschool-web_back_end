#!/usr/bin/env python3
"""
Bu modul elementlərin uzunluğunu hesablayan və mürəkkəb tip
təyinləri istifadə edən funksiyanı ehtiva edir.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Iterable qəbul edir və hər elementin özü və uzunluğundan
    ibarət tuple siyahısını qaytarır.
    """
    return [(i, len(i)) for i in lst]
