using Avalonia.Controls;

namespace EmbeddedApplication.Views;

public partial class MainWindow : Window
{
	public MainWindow()
	{
		InitializeComponent();
		links.ItemsSource = new string[] { "Dashboard", "Orders", "Menu" };
	}
}
