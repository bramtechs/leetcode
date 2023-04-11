import std.stdio;
import std.conv;
import std.random;
import std.string;

void print_tree_array(int[] array)
{
    // estimate print width
    int maxWidth = (1<<0); // is power of 2
    int j = 0;
    for (int i = 0; i < array.length; i++)
    {
        if (i == maxWidth-1)
        {
            maxWidth = (1<<++j);
        }
    }

    // print the array as tree
    int currentLevel = 0;
    int maxPerLevel = (1<<currentLevel); // is power of 2
    string line;
    for (int i = 0; i < array.length; i++)
    {
        if (i == maxPerLevel-1)
        {
            string cntr = center(line,maxWidth,' ');
            writeln(cntr);
            maxPerLevel = (1<<++currentLevel);
            line = "";
        }

        string str = to!string(array[i]);
        line ~= " " ~ str;
    }
}

void main()
{
    alias CPP11LCG = LinearCongruentialEngine!(uint, 48271, 0, 2_147_483_647);

    // seed with a constant
    auto rnd = CPP11LCG(unpredictableSeed);

    // generate tree
    int[] sizes = [10, 30, 50, 100];
    foreach (size; sizes) {
        writeln("size: ", size, "\n");
        int[] tree;
        for (int i = 0; i < size; i++){
            tree ~= uniform!"[]"(0,100);
        }
        print_tree_array(tree);
    }
}
